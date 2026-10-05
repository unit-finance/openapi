from helpers.api import build_tax_forms_api, requires_token
from helpers.tax_forms import get_tax_form_id


@requires_token
def test_downloads_a_tax_form_as_pdf():
    tax_form_id = get_tax_form_id()
    if tax_form_id is None:
        return

    res = build_tax_forms_api().get_tax_form_pdf_by_id_with_http_info(tax_form_id)

    assert res.status_code == 200
    assert res.data is not None
