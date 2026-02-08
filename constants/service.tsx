export const servicesData: serviceData[] = [
  {
    number: "01",
    title: "Batch Auctions",
    description: "Sealed-bid auctions settle every 5 minutes at uniform clearing rates. MEV-resistant and fair for all participants.",
    details: [
      "5-minute epoch settlement cycles",
      "Uniform clearing rate for all participants",
      "Sealed bids prevent front-running",
      "Supply meets demand algorithmically"
    ]
  },
  {
    number: "02",
    title: "Risk Tranches",
    description: "Choose your risk profile. Senior tranches get paid first at lower rates. Junior tranches earn higher yields.",
    details: [
      "Senior tranche: 70% of loan, paid first",
      "Junior tranche: 30% of loan, higher yield",
      "Waterfall payment distribution",
      "Fixed-rate returns, no surprises"
    ]
  },
  {
    number: "03",
    title: "On-Chain Credit",
    description: "Build your reputation with every successful repayment. Higher scores unlock lower collateral requirements.",
    details: [
      "Score increases +10 per repayment",
      "5 tiers: Bronze to Diamond",
      "Collateral drops from 150% to 110%",
      "Stored on-chain in CreditRegistry"
    ]
  },
  {
    number: "04",
    title: "Hybrid Architecture",
    description: "Funds secured on-chain. Matching optimized off-chain. The server can never touch your funds.",
    details: [
      "All funds held in smart contract",
      "Off-chain matching for gas efficiency",
      "USDC-only, no oracle risk",
      "Cross-chain via Circle CCTP"
    ]
  }
]

export interface serviceData {
  number: string,
  title: string,
  description: string,
  details: string[]
}