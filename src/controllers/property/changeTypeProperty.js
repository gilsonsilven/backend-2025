export default function changeTypeProperty(req, res) {
    return res.json({
        message: "Imóvel atualizado com sucesso",
        property: {
            id: 1,
            endereco: "Rua das camas"                
        }
      })
}