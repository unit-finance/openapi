# UpdateCardRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UpdateCardData**](UpdateCardData.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_card_request import UpdateCardRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCardRequest from a JSON string
update_card_request_instance = UpdateCardRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateCardRequest.to_json())

# convert the object into a dict
update_card_request_dict = update_card_request_instance.to_dict()
# create an instance of UpdateCardRequest from a dict
update_card_request_from_dict = UpdateCardRequest.from_dict(update_card_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


