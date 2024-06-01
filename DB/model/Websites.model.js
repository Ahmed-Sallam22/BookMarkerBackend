import { model, Schema, Types } from 'mongoose';


const WebsitesSchema = new Schema({
    WebsiteName: { type: String, required: true },
    WebsiteURL: { type: String, required: true },
}, {
    timestamps: true
})

const WebsitesModel = model('Websites', WebsitesSchema)

export default WebsitesModel