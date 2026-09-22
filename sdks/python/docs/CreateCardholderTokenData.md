# CreateCardholderTokenData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateCardholderTokenDataAttributes**](CreateCardholderTokenDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_cardholder_token_data import CreateCardholderTokenData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCardholderTokenData from a JSON string
create_cardholder_token_data_instance = CreateCardholderTokenData.from_json(json)
# print the JSON string representation of the object
print(CreateCardholderTokenData.to_json())

# convert the object into a dict
create_cardholder_token_data_dict = create_cardholder_token_data_instance.to_dict()
# create an instance of CreateCardholderTokenData from a dict
create_cardholder_token_data_from_dict = CreateCardholderTokenData.from_dict(create_cardholder_token_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


