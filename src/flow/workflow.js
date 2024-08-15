import ReactFlow, { Background, Controls, ReactFlowProvider, useEdgesState, useNodesState,addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import { Box } from '@chakra-ui/react';
import React,{useCallback} from 'react';
import {initialEdges,initialNodes} from './flowconstant';
import PaymentInit from './PaymentInit';
import PaymentCountry from './PaymentCountry';
import PaymentProvider from './PaymentProvider';
import PaymentProviderSelect from './PaymentProviderSelect';
import { type } from '@testing-library/user-event/dist/type';
import CustomEdge from './CustomEdge';



const nodeTypes ={
  'PaymentInit' : PaymentInit,
  // 'PaymentCountry' : PaymentCountry,
  'PaymentProvider':PaymentProvider,
  'paymentProviderSelect':PaymentProviderSelect,

}

const edgeTypes = {
  customEdge: CustomEdge,
};


export const Workflow = () => {

  const [nodes,setNodes,onNodesChange] = useNodesState(initialNodes)
  const [edges,setEdges,onEdgesChange] = useEdgesState(initialEdges)
  

  const onConnect = useCallback((connection: Connection)=>{

    const edge = {...connection,animated: true,id:`${edges.length}+1`,type:'customEdge'};
    setEdges((prevEdges)=> addEdge(edge,prevEdges));

  },[]);

  return (
    <ReactFlowProvider>
<Box
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >


      <Box height={"100vh"} width="100%" border="2px solid black">
        <ReactFlow 
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange} 
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}  //edges ko connect krne ke liye ek node se dusre node ko
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView 
        >
        <Background/> 
        <Controls/>
        </ReactFlow>
      </Box>
      </Box>
    </ReactFlowProvider>
  );
};
