import { remove } from "../../models/propertyModel.js"

export default async function deleteProperty(req, res) {
    const {id} = req.params

    const result = await remove(+id)

    return res.json({
        message: `Imóvel id ${id} deletado com sucesso`,
        property: result
    })
}