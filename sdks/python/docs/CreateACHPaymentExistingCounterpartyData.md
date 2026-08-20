# CreateACHPaymentExistingCounterpartyData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateACHPaymentExistingCounterpartyDataAttributes**](CreateACHPaymentExistingCounterpartyDataAttributes.md) |  | 
**relationships** | [**CreateACHPaymentExistingCounterpartyDataRelationships**](CreateACHPaymentExistingCounterpartyDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_ach_payment_existing_counterparty_data import CreateACHPaymentExistingCounterpartyData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateACHPaymentExistingCounterpartyData from a JSON string
create_ach_payment_existing_counterparty_data_instance = CreateACHPaymentExistingCounterpartyData.from_json(json)
# print the JSON string representation of the object
print(CreateACHPaymentExistingCounterpartyData.to_json())

# convert the object into a dict
create_ach_payment_existing_counterparty_data_dict = create_ach_payment_existing_counterparty_data_instance.to_dict()
# create an instance of CreateACHPaymentExistingCounterpartyData from a dict
create_ach_payment_existing_counterparty_data_from_dict = CreateACHPaymentExistingCounterpartyData.from_dict(create_ach_payment_existing_counterparty_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


