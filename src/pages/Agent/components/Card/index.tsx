import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Navigation, Pagination, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";
import { useQuery } from "react-query";
import { agentService } from "../../../../data/services/Agent";

export default function Card() {
  const smDown = window.innerWidth < 600;
  const { data } = useQuery({
    queryKey: "agent",
    queryFn: () => agentService.getAll(),
  });

  console.log(data?.data[0].abilities[0].description);

  return (
    <Box
      sx={{
        borderRadius: "20px",
        border: "1px dashed red",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
      }}
    >
      <Swiper
        effect="coverflow"
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        grabCursor
        modules={[Pagination, Navigation, EffectCoverflow, Zoom]}
        style={{
          width: smDown ? "70%" : "10rem",
          height: smDown ? "auto" : "10rem",
          margin: smDown ? "10px auto" : "5px 5px",
        }}
      >
        {data?.data.map((agent) => (
          <SwiperSlide key={agent.uuid}>
            <img
              src={agent.displayIcon}
              alt={agent.displayName}
              style={{
                width: smDown ? "100%" : "10rem",
                height: smDown ? "auto" : "10rem",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
