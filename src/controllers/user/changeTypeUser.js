export default function changeTypeUser (req, res) {
    return res.json({
        message: "Usuário atualizado com sucesso",
        user: {
            avatar: "https://avatars.githubusercontent.com/u/88011617?v=4"                
        }
      })
}