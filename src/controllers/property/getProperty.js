import { getList } from "../../models/propertyModel.js"

export default async function getProperty(req, res) {

    const result = await getList()

    return res.json(result)
}

