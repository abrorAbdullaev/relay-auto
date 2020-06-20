export interface Load {
  id: string;
  startTime: string;
  endTime: string;
  stopCount: number;
  payout: {
    value: string;
    unit: string;
  },
  tourState: string;
  loads: Array<{
    stops: Array<{
      stopType: 'PICKUP' | 'DROPOFF',
      stopSequenceNumber: number,
      location: {
        label: string;
        line1: string;
        city: string;
        state: string;
        country: string;
        postCode: string;
        latitude: number;
        longitude: number;
      }
    }>
  }>,
  workType: string;
  workOpportunityOptionId: string;
  workOpportunityType: 'ONE_WAY' | 'ROUND_TRIP';
};

export interface RelayResponse {
  nextItemToken: number;
  totalResultsSize: number;
  workOpportunities: Array<Load>,
  isBotRequest: any
}