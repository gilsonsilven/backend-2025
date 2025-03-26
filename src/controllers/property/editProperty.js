import { update } from "../../models/propertyModel.js"

export default async function editProperty(req, res) {
    const {id} = req.params
    const property = req.body

    const result = await update(+id, property)

    return res.json({
      message: `Imóvel id ${id} atualizado com sucesso`,
      property: result
  })
}