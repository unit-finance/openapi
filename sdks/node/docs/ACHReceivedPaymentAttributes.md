# ACHReceivedPaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the transaction was created. Common to all receive payment types. | [default to undefined]
**status** | **string** | The status of the Received Payment. One of Pending, PendingReview, MarkedForReturn, Advanced, Completed or Returned. See ReceivedPayment Statuses. Common to all received payment types. | [default to undefined]
**wasAdvanced** | **boolean** | Will be true if the received payment was or is being Advanced (has or has had the status Advanced). Common to all received payment types. | [default to undefined]
**isAdvanceable** | **boolean** | Will be true if the received payment can be advanced. | [optional] [default to undefined]
**direction** | **string** | The direction in which the funds flow (either Debit or Credit). | [default to undefined]
**completionDate** | **string** | Shows the date on which the received ACH will be completed (settled or repaid). | [default to undefined]
**returnReason** | **string** | Optional. The reason if the received payment is Returned. See ACH return reasons. | [optional] [default to undefined]
**amount** | **number** | The amount (cents) of the ACH received payment. Common to all received payment types. | [default to undefined]
**description** | **string** | ACH description (maximum of 10 characters), also known as Company Entry Description. | [default to undefined]
**addenda** | **string** | Optional. Additional transaction description (maximum of 80 characters). | [optional] [default to undefined]
**companyName** | **string** | The name by which the originator is known to the receiver. | [default to undefined]
**originatorEntityId** | **string** | Optional. A unique identifier by which the originator is formally recognized within the ACH network. | [optional] [default to undefined]
**receivingEntityName** | **string** | Optional. The name of the Recipient as it was declared by the originator of the payment. | [optional] [default to undefined]
**counterpartyRoutingNumber** | **string** | The routing number of the party that originated the received ACH payment. | [default to undefined]
**traceNumber** | **string** | The ACH Trace Number. | [default to undefined]
**secCode** | **string** | Optional. The 3-letter ACH Standard Entry Class (SEC) Code (e.g. WEB, CCD, PPD, etc.). | [optional] [default to undefined]
**returnCutoffTime** | **string** | Optional. The last time when a reprocess will be accepted. Will be the next banking day 2pm ET. | [optional] [default to undefined]
**canBeReprocessed** | **boolean** | Optional. If set to true, the Received Payment can be reprocessed until the returnCutoffTime. If empty, the Received Payments can\&#39;t be reprocessed. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]

## Example

```typescript
import { ACHReceivedPaymentAttributes } from '@unit-finance/unit-node-sdk';

const instance: ACHReceivedPaymentAttributes = {
    createdAt,
    status,
    wasAdvanced,
    isAdvanceable,
    direction,
    completionDate,
    returnReason,
    amount,
    description,
    addenda,
    companyName,
    originatorEntityId,
    receivingEntityName,
    counterpartyRoutingNumber,
    traceNumber,
    secCode,
    returnCutoffTime,
    canBeReprocessed,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
