# FreezeCardRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**FreezeCardData**](FreezeCardData.md) |  | 

## Example

```python
from unit_finance_sdk.models.freeze_card_request import FreezeCardRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FreezeCardRequest from a JSON string
freeze_card_request_instance = FreezeCardRequest.from_json(json)
# print the JSON string representation of the object
print(FreezeCardRequest.to_json())

# convert the object into a dict
freeze_card_request_dict = freeze_card_request_instance.to_dict()
# create an instance of FreezeCardRequest from a dict
freeze_card_request_from_dict = FreezeCardRequest.from_dict(freeze_card_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


