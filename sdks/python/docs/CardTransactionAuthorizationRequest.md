# CardTransactionAuthorizationRequest

`CardTransactionAuthorizationRequest` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**CardTransactionAuthorizationRequestAttributes**](CardTransactionAuthorizationRequestAttributes.md) |  | 
**relationships** | [**PurchaseAuthorizationRequestRelationships**](PurchaseAuthorizationRequestRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.card_transaction_authorization_request import CardTransactionAuthorizationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CardTransactionAuthorizationRequest from a JSON string
card_transaction_authorization_request_instance = CardTransactionAuthorizationRequest.from_json(json)
# print the JSON string representation of the object
print(CardTransactionAuthorizationRequest.to_json())

# convert the object into a dict
card_transaction_authorization_request_dict = card_transaction_authorization_request_instance.to_dict()
# create an instance of CardTransactionAuthorizationRequest from a dict
card_transaction_authorization_request_from_dict = CardTransactionAuthorizationRequest.from_dict(card_transaction_authorization_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


