import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronBarDown } from "react-bootstrap-icons";
import { useReactFlow } from "reactflow";

const PAYMENT_PROVIDERS = [
  { code: "St", name: "Stripe" },
  { code: "Gp", name: "Google Pay" },
  { code: "Ap", name: "Apple Pay" },
  { code: "Pp", name: "Paypal" },
  { code: "Am", name: "Amazon Pay" },
];


export default function PaymentProviderSelect() {
  const { setNodes } = useReactFlow();

  const onProviderClick = ({ name, code }: { name: string; code: string }) => {
   
    const location = Math.random() * 500;

    setNodes((prevNodes) => [
      ...prevNodes,
      
      {
        id: `${prevNodes.length + 1}`,
        data: { name, code },
        type: "PaymentProvider",
        position: { x: location, y: location },
      },
    ]);
  };

  return (
    <Menu>
      <MenuButton as={Button} 
      rightIcon={<ChevronBarDown />}
      sx={{
          backgroundColor: "#3182ce",
          color: "white",
          _hover: { backgroundColor: "#2c5282" },
          _active: { backgroundColor: "#2a4365" },
          // borderRadius: "md",
          paddingX: 10,
          paddingY:12,
          borderRadius: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Add Payment Mode
      </MenuButton>
      <MenuList
      sx={{
          borderRadius: "md",
          boxShadow: "md",
          backgroundColor: "white",
        }}
      >
        {PAYMENT_PROVIDERS.map((provider) => (
          <MenuItem 
          key={provider.code}
          onClick={() => onProviderClick(provider)}
          sx={{
              _hover: { backgroundColor: "#edf2f7" },
              _focus: { backgroundColor: "#e2e8f0" },
              padding: "8px 16px",
              borderRadius: "md",
              fontSize: "md",
            }}
          >
            {provider.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
