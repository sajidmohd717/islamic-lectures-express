import mongoose from "mongoose"

const seriesSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        speaker: {
            type: String,
            required: true,
        },
        views: {
            type: String,
            required: true,
        },
        episodes: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export const Series = mongoose.model('series', seriesSchema)