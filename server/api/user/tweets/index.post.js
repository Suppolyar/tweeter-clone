import formidable from 'formidable'
import { createTweet } from "~/server/db/tweets";
import { tweetTransformer } from "~/server/transformers/tweet";
import { createMediaFile } from "~/server/db/mediaFile";
import { uploadToCloudinary } from '~/server/utils/cloudinary'

export default defineEventHandler(async (event) => {
    const form = formidable({})

    const response = await new Promise((resolve, reject) => {
        form.parse(event.node.req, (err, fields, files) => {
            if (err) {
                reject(err)
            } else
                resolve({fields, files})
        })
    })

    const {fields, files} = response

    const user = event.context

    const tweetData = {
        text: fields.text,
        authorId: user.id
    }

    const tweet = await createTweet(tweetData)

    const filePromises = Object.keys(files).map(async (key) => {
        const file = files[key]

        const cloudinaryResource = await uploadToCloudinary(file.filepath)

        console.log(response)

        return createMediaFile({
            url: cloudinaryResource.secure_url,
            providerPublicId: cloudinaryResource.public_id,
            userId: user.id,
            tweetId: tweet.id
        })
    })

    await Promise.all(filePromises)


    return {
        // userId: user.id,
        tweet: tweetTransformer(tweet)
        // files
    }
})
