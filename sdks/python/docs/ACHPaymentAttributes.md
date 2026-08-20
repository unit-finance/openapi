# ACHPaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**status** | **str** | One of Pending, PendingReview, Rejected, Clearing, Sent, Canceled, Returned. See ACH Status. | 
**reason** | **str** | Optional. More information about the status. | [optional] 
**counterparty** | [**CounterpartyType**](CounterpartyType.md) | The party on the other side of the ACH payment. | 
**direction** | **str** | The direction in which the funds flow (either Debit or Credit). | 
**description** | **str** | Payment description (maximum of 10 characters), also known as Company Entry Description, this will show up on statement of the counterparty. | 
**addenda** | **str** | Optional, additional payment description (maximum of 50 characters), not all institutions present that. | [optional] 
**amount** | **int** | The amount (cents) of the payment. | 
**settlement_date** | **datetime** | Optional, for ACH debit with statuses Pending, Clearing, shows the date on which the payment will be settled. | [optional] 
**expected_completion_date** | **datetime** | Optional, for ACH credit with statuses Pending, Sent, shows the date on which the counterparty will handle the request. | [optional] 
**tags** | **Dict[str, object]** | See Tags. | 
**counterparty_verification_method** | **str** | Optional, shows the verification method of the counterparty: &#39;Plaid&#39;. | [optional] 
**same_day** | **bool** | Indicates whether the payment is a Same Day ACH payment. See Same Day ACH. | 
**sec_code** | **str** | The 3-letter ACH Standard Entry Class (SEC) Code. One of WEB, CCD, PPD. | 

## Example

```python
from unit_finance_sdk.models.ach_payment_attributes import ACHPaymentAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ACHPaymentAttributes from a JSON string
ach_payment_attributes_instance = ACHPaymentAttributes.from_json(json)
# print the JSON string representation of the object
print(ACHPaymentAttributes.to_json())

# convert the object into a dict
ach_payment_attributes_dict = ach_payment_attributes_instance.to_dict()
# create an instance of ACHPaymentAttributes from a dict
ach_payment_attributes_from_dict = ACHPaymentAttributes.from_dict(ach_payment_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


