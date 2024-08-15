import {Edge,Node} from "reactflow";

export const initialEdges: Edge[] = [];
export const initialNodes: Node[] = [

    {
        id:"1",
        position: {x:100,y:100},
        data:{amount:10},
        type:"PaymentInit",
    },


  

    

    {
        id:"4",
        data:{name: "Google Pay", code:"Gp"},
        position: {x:550,y:-50},
        type:"PaymentProvider",
    },

    {
        id:"5",
        data:{name: "Stripe", code:"St"},
        position: {x:550,y:125},
        type:"PaymentProvider",
    },

    {
        id:"6",
        data:{name: "Apple Pay", code:"Ap"},
        position: {x:550,y:325},
        type:"PaymentProvider",
    },


    {
        id:"7",
        data:{},
        position: {x:275,y:-100},
        type:"paymentProviderSelect",
    },

];
