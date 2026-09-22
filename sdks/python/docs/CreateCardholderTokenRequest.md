# CreateCardholderTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateCardholderTokenData**](CreateCardholderTokenData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_cardholder_token_request import CreateCardholderTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCardholderTokenRequest from a JSON string
create_cardholder_token_request_instance = CreateCardholderTokenRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCardholderTokenRequest.to_json())

# convert the object into a dict
create_cardholder_token_request_dict = create_cardholder_token_request_instance.to_dict()
# create an instance of CreateCardholderTokenRequest from a dict
create_cardholder_token_request_from_dict = CreateCardholderTokenRequest.from_dict(create_cardholder_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


