export interface ICampaign {
    name: string;
    description: string;
    game: string;
    otherGame?: string;
    startDate: Date;
    endDate: Date;
    budget: number;
    crypto: boolean;
    language: string;
  }

export interface INewData {
    name: string;
    game: string;
    startDate: string;
    budget: string;
    language: string;
  }


  