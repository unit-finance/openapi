# CreateACHPaymentExistingCounterpartyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateACHPaymentExistingCounterpartyData**](CreateACHPaymentExistingCounterpartyData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_ach_payment_existing_counterparty_request import CreateACHPaymentExistingCounterpartyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateACHPaymentExistingCounterpartyRequest from a JSON string
create_ach_payment_existing_counterparty_request_instance = CreateACHPaymentExistingCounterpartyRequest.from_json(json)
# print the JSON string representation of the object
print(CreateACHPaymentExistingCounterpartyRequest.to_json())

# convert the object into a dict
create_ach_payment_existing_counterparty_request_dict = create_ach_payment_existing_counterparty_request_instance.to_dict()
# create an instance of CreateACHPaymentExistingCounterpartyRequest from a dict
create_ach_payment_existing_counterparty_request_from_dict = CreateACHPaymentExistingCounterpartyRequest.from_dict(create_ach_payment_existing_counterparty_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


