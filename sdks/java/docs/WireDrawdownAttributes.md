

# WireDrawdownAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**amount** | **Integer** | The amount (cents) of the wire drawdown. |  |
|**description** | **String** | Wire drawdown description. |  |
|**counterparty** | [**WireCounterpartyType**](WireCounterpartyType.md) | The beneficiary party on the other end of the wire drawdown. |  |
|**direction** | **String** | The direction of the wire drawdown, either Incoming or Outgoing. |  |
|**imad** | **String** | Input Message Accountability Data. It&#39;s a unique number given to each wire drawdown. |  [optional] |
|**omad** | **String** | Output Message Accountability Data. It&#39;s a unique number given to each wire drawdown. |  [optional] |
|**senderReference** | **String** | Sender reference. |  [optional] |
|**referenceForBeneficiary** | **String** | Reference for the Beneficiary. |  [optional] |
|**beneficiaryInformation** | **String** | Beneficiary Information, multi-line string delimited by \\n. |  [optional] |
|**beneficiaryAdviceInformation** | **String** | Beneficiary Advice Information, multi-line string delimited by \\n. |  [optional] |
|**originatorToBeneficiaryInformation** | **String** | Originator To Beneficiary Information, multi-line string delimited by \\n. |  [optional] |



