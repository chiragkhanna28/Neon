//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DomainTests {
    #if NETSTANDARD || NETFRAMEWORK || NETCOREAPP
    [System.CodeDom.Compiler.GeneratedCode("Neo.BuildTasks","1.0.37.24957")]
    #endif
    [System.ComponentModel.Description("DomainContract")]
    interface DomainContract {
        bool changeNumber(System.Numerics.BigInteger positiveNumber);
        byte[] getNumber();
        void updateContract(byte[] nefFile, string manifest);
        interface Events {
            void NumberChanged(Neo.UInt160 arg1, System.Numerics.BigInteger arg2);
        }
    }
}
