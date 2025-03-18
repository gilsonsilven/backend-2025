export default function editProperty(req, res) {
    return res.json({
        message: "Imóvel atualizado com sucesso",
        property: {
          id: 1,
          areaTotal: "500m²",
          endereco: "Rua dos testes",
          numeroDeQuartos: "2"     
        }
    })
}