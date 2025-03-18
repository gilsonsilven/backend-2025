export default function getUser  (req, res) {

    const {id} = req.params // pega só o id do parametro

    return res.json({
          id: +id, //converte id, que é uma string, em inteiro
          name: "teste",
          email: "teste@gmail.com",
          avatar: "https://avatars.githubusercontent.com/u/88011617?v=4"
      })
  }