from boa3.builtin import public
from boa3.builtin.interop.storage import put, get

@public
def savename():
    put("SaveName", "Piyush")

@public
def getname() -> str:
    return bytes.to_str(get("SaveName"))