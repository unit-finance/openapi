# CreateCreditApplication201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ListCreditApplications200ResponseDataInner**](ListCreditApplications200ResponseDataInner.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_credit_application201_response import CreateCreditApplication201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCreditApplication201Response from a JSON string
create_credit_application201_response_instance = CreateCreditApplication201Response.from_json(json)
# print the JSON string representation of the object
print(CreateCreditApplication201Response.to_json())

# convert the object into a dict
create_credit_application201_response_dict = create_credit_application201_response_instance.to_dict()
# create an instance of CreateCreditApplication201Response from a dict
create_credit_application201_response_from_dict = CreateCreditApplication201Response.from_dict(create_credit_application201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


