export default function createProperty(req, res) {
    return res.json({
        message: "Imóvel criado com sucesso",
        property: {
          id: 1,
          areaTotal: "300m²",
          endereco: "Rua dos testes",
          numeroDeQuartos: "3"     
        }
    })
}