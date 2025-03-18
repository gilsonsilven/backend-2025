export default function editUser (req, res) {
    return res.json({
        message: "Usuário atualizado com sucesso",
        user: {
            name: "teste2",
            email: "teste@hotmail.com",
            avatar: "https://avatars.githubusercontent.com/u/88011617?v=4"                
        }
    })
}