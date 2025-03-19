import { create } from "../../models/propertyModel.js"

export default async function createProperty(req, res) {
    const property = req.body

    const result = await create(property)

    return res.json({
        message: "Imóvel criado com sucesso",
        property: result
    })
}