import React, { useState } from "react";

export const Form = ({
  addCampaign
} : {
  addCampaign: (arg0: {
    name: string;
    game: string;
    startDate: string;
    budget: string;
    language: string;
  }) => void
}) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    game: "League of Legends",
    otherGame: "",
    startDate: "",
    endDate: "",
    budget: "",
    crypto: "",
    language: "English",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.value,
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
      crypto: "",
      language: "English",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputContent">
        <label>Campaign name (up to 20 characters)</label>
        <input
          name="name"
          maxLength={20}
          onChange={handleChange}
          value={formData.name}
          required
        />
        <label>Campaign description (up to 200 characters)</label>
        <input
          name="description"
          maxLength={200}
          onChange={handleChange}
          value={formData.description}
          required
        />
        <label>Campaing Game</label>
        <select
          name="game"
          onChange={handleChange}
          value={formData.game}
          required
        >
          <option value="League of Legends">League of Legends</option>
          <option value="DOTA 2">DOTA 2</option>
          <option value="Minecraft">Minecraft</option>
          <option value="Fortnite">Fortnite</option>
          <option value="Apex Legends">Apex Legends</option>
          <option value="Other">Other</option>
        </select>
        {formData.game === "Other" && (
          <label id="otherGame" className={formData.game === "Other" ? "" : "hidden"}>
            Other game 
            <input
              name="otherGame"
              onChange={handleChange}
              value={formData.otherGame}
              required
            />
          </label>
        )}
        <label>Start date</label>
        <input
          type="date"
          name="startDate"
          onChange={handleChange}
          value={formData.startDate}
          required
        />
        <label>End date</label>
        <input
          type="date"
          name="endDate"
          onChange={handleChange}
          value={formData.endDate}
          required
        />
        <label>Campaign budget(up tp 10 000 dollars)</label>
        <input
          type="number"
          name="budget"
          min={1}
          max={10000}
          onChange={handleChange}
          value={formData.budget}
          required
        />
        <label>Can the campaign be paid with Crypto currency?</label>
        <input
          type="checkbox"
          name="crypto"
          onChange={handleChange}
          value={formData.crypto}
        />
        <label>Language</label>
        <select
          name="language"
          onChange={handleChange}
          value={formData.language}
          required
        >
          <option value="English">English</option>
          <option value="German">German</option>
          <option value="Spanish">Spanish</option>
          <option value="Japanese">Japanese</option>
        </select>
        <button type="submit" name="button" className="button">
          Add campaign
        </button>
      </div>
    </form>
  );
}
