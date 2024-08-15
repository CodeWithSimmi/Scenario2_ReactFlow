import { Box, Flex, Image,Text,IconButton } from '@chakra-ui/react';
import { CloseIcon as X } from '@chakra-ui/icons';
import React from 'react'
import { NodeProps, Handle, Position } from 'reactflow';
import { useReactFlow } from 'reactflow';

const PAYMENT_PROVIDER_IMAGE_MAP: { [code: string]: string } = {
  St: "https://cdn.worldvectorlogo.com/logos/stripe-2.svg",
  Ap: "https://cdn.worldvectorlogo.com/logos/apple-14.svg",
  Gp: "https://cdn.worldvectorlogo.com/logos/google-g-2015.svg",
  Pp: "https://avatars.githubusercontent.com/u/476675?s=280&v=4",
  Am: "https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png",
};




export default function PaymentMode({
  data:{name,code},
  id,
}:NodeProps<{name:string; code:string}>){

  const{ setNodes }=useReactFlow();

  return (
    
    <Flex
    borderRadius={"24px"}
    border="2px solid #5e5eff"
    alignItems={"center"}
    bg="white"
    p={1}
    pb={1}
    pl={"12px"}
    gap={2}
    width="140px"
  >
    <Box h={14} w={14}>
      <Image
        height="100%"
        width="100%"
        src={PAYMENT_PROVIDER_IMAGE_MAP[code]}
      />
    </Box>

    <Flex 
    direction="column" 
    justify="center"   
    grow="1"
    >
      <Text fontSize="small" mt={"-2px"}>
        {name}
      </Text>
    </Flex>
    <IconButton
      aria-label="Delete Payment Provider"
      pointerEvents="all"
      icon={
          <Box pl="2" pr="8"> 
            <X />
          </Box>
        }
      color="red"
        bg="transparent"
        size="sm"
        _hover={{ bg: "transparent" }} 
        _focus={{ boxShadow: "none" }} 
        _active={{ bg: "transparent" }} 
        border="none" 
      onClick={() =>
        setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id))
      }
    />
    <Handle type="target" position={Position.Left} />
  </Flex>

  );
}

 
