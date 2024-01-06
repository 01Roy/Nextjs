import { notFound } from "next/navigation"
export default function ReviweDeatail(
    {params} :{
        params : {
            productId :string,
            reviweId : string
        }
    }
    ){
        if(parseInt(params.reviweId)>1000){
            return notFound()
        }
    return <h1>Review {params.reviweId} product {params.productId}</h1>
}