import { Layout, Input } from 'components'
import { useState } from 'react'

export const CadastroProdutos: React.FC = () => {

    const[sku, setSKU] = useState('')
    const[preco, setPreco] = useState('')
    const[nome, setNome] = useState('')
    const[descricao, setDescricao] = useState('')

    const Submit = () => {
        const oneProduct = {
            sku,
            preco,
            nome,
            descricao,
        }
        console.log(oneProduct)
    }

    return (
        <Layout title="Cadastro de Produtos">
            <div className="columns">
                <Input
                    label="SKU *"
                    columnClasses="is-half"
                    onChange={setSKU}
                    placeholder="Digite o SKU do produto"
                    id="inputSKU"
                    value={sku}
                />
                <Input
                    label="Preço *"
                    columnClasses="is-half"
                    onChange={setPreco}
                    placeholder="Digite o Preço do produto"
                    id="inputPreco"
                    value={preco}
                />
            </div>

            <div className="columns">
                <Input
                    label="Nome *"
                    onChange={setNome}
                    placeholder="Digite o Nome do produto"
                    id="inputNome"
                    value={nome}
                />
            </div>

            <div className="columns">
                <div className="field column is-full">
                    <label className="label" htmlFor="textDescricao">Message</label>
                    <div className="control">
                        <textarea
                            id="textDescricao" name="descricao" onChange={e=>{setDescricao(e.target.value)}}
                            className="textarea" placeholder="Digite a descrição detalhada do produto"></textarea>
                    </div>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button
                        onClick={Submit}
                        className="button is-link">
                        Salvar
                    </button>
                </div>
                <div className="control">
                    <button className="button is-link">
                        Voltar
                    </button>
                </div>
            </div>
        </Layout>
    )
}