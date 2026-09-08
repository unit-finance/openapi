

# WireTransactionAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the transaction was created. Common to all transaction types. |  |
|**direction** | **String** | The direction in which the funds flow. Common to all transaction types. |  |
|**amount** | **Integer** | The amount (cents) of the transaction. Common to all transaction types. |  |
|**balance** | **Integer** | The account balance (cents) after the transaction. Common to all transaction types. |  |
|**summary** | **String** | Summary of the transaction. Common to all transaction types. |  |
|**imadOmad** | **Map&lt;String, Object&gt;** | (Conditional) IMAD/OMAD - Input/Output Message Accountability Data. It&#39;s a unique number given to each FedWire payment in case of payment has been sent and fully processed. |  |
|**counterparty** | [**CounterpartyType**](CounterpartyType.md) | The party on the other end of the transaction, either the beneficiary or the originator. |  |
|**description** | **String** | Description of the transaction as entered by the originator. |  [optional] |
|**originatorToBeneficiaryInformation** | **String** | Originator To Beneficiary Information, multi-line string delimited by \\n. |  |
|**senderReference** | **String** | Sender reference. |  |
|**referenceForBeneficiary** | **String** | Reference for the Beneficiary. |  |
|**beneficiaryInformation** | **String** | Beneficiary Information, multi-line string delimited by \\n. |  |
|**beneficiaryAdviceInformation** | **String** | Beneficiary Advice Information, multi-line string delimited by \\n. |  |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  |



