import React from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { Box, Text } from "@chakra-ui/react";

export default function PaymentInit({
  data: { amount },
}: NodeProps <{ amount: number }>) {
  return (
    <Box bg="white" border="1px solid #aa1fff">
      <Box bg="#410566" p={1}>
        <Text fontSize="small" color="white" paddingX={"10px"} >
          Payment System
        </Text>
      </Box>

      
    

    <Handle type="source" position={Position.Right} />
    

    </Box>
  );
}
