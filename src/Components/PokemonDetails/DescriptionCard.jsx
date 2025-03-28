import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
} from "@mui/material";
import { useSelector } from "react-redux";
import "./index.css";

export default function DescriptionCard() {
  const pokemon = useSelector((state) => state.pokemon) || {};

  return (
    <div className="DescriptionCard">
      <Card sx={{ minWidth: 364 }}>
        <CardMedia
          component="img"
          sx={{ width: 300, height: 184 }}
          image={pokemon.image || "https://via.placeholder.com/300"}
          alt={pokemon.name || "Pokemon"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.name || "Unknown Pokemon"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            POKEMON TYPE: {pokemon.type || "Unknown"}
          </Typography>
          {pokemon.moves && pokemon.moves.length > 0 && (
            <Card sx={{ mt: 2 }}>
              <CardContent>
                <Stack direction="row" spacing={1}>
                  {pokemon.moves.slice(0, 3).map((move, index) => (
                    <Chip key={index} label={move} color="primary" variant="outlined" />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
