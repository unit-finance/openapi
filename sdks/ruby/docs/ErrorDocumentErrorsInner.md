# UnitFinanceSdk::ErrorDocumentErrorsInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **status** | **String** |  | [optional] |
| **title** | **String** |  | [optional] |
| **detail** | **String** |  | [optional] |
| **details** | **String** | Alias of &#x60;detail&#x60; returned by the Unit API for some errors. | [optional] |
| **code** | **String** |  | [optional] |
| **source** | [**ErrorDocumentErrorsInnerSource**](ErrorDocumentErrorsInnerSource.md) |  | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::ErrorDocumentErrorsInner.new(
  status: null,
  title: null,
  detail: null,
  details: null,
  code: null,
  source: null
)
```

