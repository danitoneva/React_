import React, { useState } from "react";
import {
  Button,
  Stack,
  Checkbox,
  TextField,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Box,
  Typography,
} from "@mui/material";

export const Form = ({
  addCampaign,
}: {
  addCampaign: (arg0: {
    name: string;
    game: string;
    startDate: string;
    budget: string;
    language: string;
  }) => void;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    game: "League of Legends",
    otherGame: "",
    startDate: "",
    endDate: "",
    budget: "",
    crypto: false,
    language: "English",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: checked,
    }));
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const newCampaign = {
      name: formData.name,
      game: formData.game === "Other" ? formData.otherGame : formData.game,
      startDate: formData.startDate,
      budget: formData.budget,
      language: formData.language,
    };

    addCampaign(newCampaign);
    setFormData({
      name: "",
      description: "",
      game: "League of Legends",
      otherGame: "",
      startDate: "",
      endDate: "",
      budget: "",
      crypto: false,
      language: "English",
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 500, mx: "auto", p: 1 }}
    >
      <Stack spacing={3}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "21px",
            fontFamily:
              "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
          }}
        >
          Campaign name (up to 20 characters)
        </Typography>
        <TextField
          name="name"
          value={formData.name}
          variant="filled"
          onChange={handleChange}
          inputProps={{ maxLength: 20 }}
          fullWidth
          required
          size="small"
          InputProps={{
            sx: {
              textAlign: "center",
              fontSize: "20px",
              fontFamily:
                "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
            },
          }}
        />
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "21px",
            fontFamily:
              "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
          }}
        >
          Campaign description (up to 200 characters)
        </Typography>
        <TextField
          name="description"
          value={formData.description}
          variant="filled"
          onChange={handleChange}
          inputProps={{ maxLength: 200 }}
          fullWidth
          required
          size="small"
          InputProps={{
            sx: {
              textAlign: "center",
              fontSize: "20px",
              fontFamily:
                "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
            },
          }}
        />
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "21px",
            fontFamily:
              "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
          }}
        >
          Campaign game
        </Typography>
        <FormControl variant="filled" fullWidth required>
          <Select
            name="game"
            value={formData.game}
            onChange={handleSelectChange}
            size="small"
            sx={{
              textAlign: "center",
              fontSize: "20px",
              fontFamily:
                "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
            }}
          >
            <MenuItem value="League of Legends">League of Legends</MenuItem>
            <MenuItem value="DOTA 2">DOTA 2</MenuItem>
            <MenuItem value="Minecraft">Minecraft</MenuItem>
            <MenuItem value="Fortnite">Fortnite</MenuItem>
            <MenuItem value="Apex Legends">Apex Legends</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        {formData.game === "Other" && (
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "21px",
              fontFamily:
                "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
            }}
          >
            Other game
          </Typography>
        )}
        {formData.game === "Other" && (
          <TextField
            name="otherGame"
            value={formData.otherGame}
            variant="filled"
            onChange={handleChange}
            fullWidth
            required
            size="small"
            InputProps={{
              sx: {
                textAlign: "center",
                fontSize: "20px",
                fontFamily:
                  "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
              },
            }}
          />
        )}
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "21px",
            fontFamily:
              "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
          }}
        >
          Start date
        </Typography>
        <TextField
          type="date"
          name="startDate"
          value={formData.startDate}
          variant="filled"
          onChange={handleChange}
          fullWidth
          required
          size="small"
          InputProps={{
            sx: {
              textAlign: "center",
              fontSize: "18px",
            },
          }}
        />
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "21px",
            fontFamily:
              "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
          }}
        >
          End date
        </Typography>
        <TextField
          type="date"
          name="endDate"
          value={formData.endDate}
          variant="filled"
          onChange={handleChange}
          fullWidth
          required
          size="small"
          InputProps={{
            sx: {
              textAlign: "center",
              fontSize: "18px",
            },
          }}
        />
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "21px",
            fontFamily:
              "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
          }}
        >
          Campaign budget(up tp 10 000 dollars)
        </Typography>
        <TextField
          type="number"
          name="budget"
          value={formData.budget}
          variant="filled"
          onChange={handleChange}
          inputProps={{ min: 1, max: 10000 }}
          fullWidth
          required
          size="small"
        />
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "21px",
            fontFamily:
              "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
          }}
        >
          Can the campaign be paid with Crypto currency?
        </Typography>
        <Checkbox
          name="crypto"
          onChange={handleChangeCheck}
          checked={formData.crypto}
          sx={{
            color: "blue",
            "&.Mui-checked": {
              color: "blue",
            },
          }}
        />
        <FormControl variant="filled" fullWidth required>
          <Select
            name="language"
            value={formData.language}
            onChange={handleSelectChange}
            size="small"
            sx={{
              textAlign: "center",
              fontSize: "20px",
              fontFamily:
                "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
            }}
          >
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="German">German</MenuItem>
            <MenuItem value="Spanish">Spanish</MenuItem>
            <MenuItem value="Japanese">Japanese</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit" name="button" variant="contained">
          Add campaign
        </Button>
      </Stack>
    </Box>
  );
};
