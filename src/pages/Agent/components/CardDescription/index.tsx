import { Box } from "@mui/material";
import { useQuery } from "react-query";
import { agentService } from "../../../../data/services/Agent";

export default function CardDescription() {
  const { data } = useQuery({
    queryKey: "agent",
    queryFn: () => agentService.getAll(),
  });

  console.log(data?.data[0].abilities);
  return (
    <Box>
      {data?.data[0].abilities.map((ability, index) => (
        <Box key={index}>
          <Box>{ability.displayName}</Box>
          <Box>{ability.description}</Box>
          <img src={ability.displayIcon} alt={ability.displayName} />
        </Box>
      ))}
    </Box>
  );
}
