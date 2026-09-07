# CreateACHPaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | The amount (in cents). | 
**direction** | **str** | The direction in which the funds flow. | 
**counterparty** | [**CounterpartyType**](CounterpartyType.md) | The party on the other side of the ACH payment. | 
**description** | **str** | Payment description (maximum of 10 characters), also known as Company Entry Description, this will show up on statement of the counterparty. | 
**addenda** | **str** | Optional, additional payment description (maximum of 80 characters), not all institutions present that. | [optional] 
**idempotency_key** | **str** | Optional. See Idempotency. | [optional] 
**tags** | **Dict[str, object]** | Optional. See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] 
**same_day** | **bool** | Optional, default is false. See Same Day ACH. | [optional] 
**sec_code** | **str** | Optional. See Use a custom SEC Code. | [optional] 
**clearing_days_override** | **int** | Optional. See Dynamic Clearing Period. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_ach_payment_data_attributes import CreateACHPaymentDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateACHPaymentDataAttributes from a JSON string
create_ach_payment_data_attributes_instance = CreateACHPaymentDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateACHPaymentDataAttributes.to_json())

# convert the object into a dict
create_ach_payment_data_attributes_dict = create_ach_payment_data_attributes_instance.to_dict()
# create an instance of CreateACHPaymentDataAttributes from a dict
create_ach_payment_data_attributes_from_dict = CreateACHPaymentDataAttributes.from_dict(create_ach_payment_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


