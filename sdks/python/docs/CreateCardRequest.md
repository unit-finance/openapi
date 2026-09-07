# CreateCardRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateIndividualVirtualDebitCardData**](CreateIndividualVirtualDebitCardData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_card_request import CreateCardRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCardRequest from a JSON string
create_card_request_instance = CreateCardRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCardRequest.to_json())

# convert the object into a dict
create_card_request_dict = create_card_request_instance.to_dict()
# create an instance of CreateCardRequest from a dict
create_card_request_from_dict = CreateCardRequest.from_dict(create_card_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


