export default function createUser (req, res) {

    const user = req.body

    return res.json({
        message: "Usuário criado com sucesso",
        user: user
    })
}