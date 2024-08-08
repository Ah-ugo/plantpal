import { Dimensions, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Appbar } from 'react-native-paper'
import { Box, Button, ButtonText, HStack, Input, InputField, InputIcon, InputSlot, SearchIcon, StatusBar, Text, VStack } from '@gluestack-ui/themed'
import SelectionCrops from '../../../components/SelectionCrops'

export default function SelectCrops() {
    // Get the height of the viewport
const { height: viewportHeight } = Dimensions.get('window');

// Calculate the height equivalent to 1vh
const oneVH = viewportHeight * 0.01;
  return (
    <SafeAreaProvider style={{backgroundColor: "white", flex: 1}}>
        <StatusBar translucent backgroundColor={"white"}/>
        <Appbar.Header>
            <VStack gap={'$3'} mx={'$2'}>
                <Text fontSize={'$lg'} fontWeight='$bold' color='$black'>Select your crop</Text>
                <Text fontSize={'$sm'} fontWeight='$light'>Get special advisory for your crop</Text>
            </VStack>
        </Appbar.Header>
        <View style={{flex: 1}}>
            <Box mx={'$3'} mt={'$4'}>
        <Input
  variant="outline"
  size="xl"
  borderWidth={"$1"}
  borderRadius={"$md"}
  borderColor='#08896A'
  isDisabled={false}
  isInvalid={false}
  isReadOnly={false}
>
  <InputField placeholder="Search" placeholderTextColor={"#08896A"} />
  <InputSlot pr="$3">
              {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
              <InputIcon
                as={SearchIcon}
                color="#08896A"
              />
            </InputSlot>
</Input>
</Box>

<Box mx={'$3'} mt={'$4'}>
    <Text fontWeight='$bold' fontSize={'$sm'}>You can add maximum of 8 crops</Text>
</Box>

<HStack flexWrap='wrap' mx={'$5'} gap={'$6'} mt={'$4'}>
    <SelectionCrops title={"Mango"} img={"https://s3-alpha-sig.figma.com/img/2533/4bc6/80a3d402d6b936f9302b0d04d91d19a0?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UmkLHacU2UnV1ZzhYNO0or1TQDvRqy~Kc3-JFEc8SJ12xuxwc856oFK8X7FX6zVvMLDIEq5oDncWQSolrcv7l5S2Hc~0GpHLvgFK2PO6U3eCXPEGqFGa7GHBc6B28Lh1Gm8S4MWW2hqPOoQwauXHYf4A4N0iOoGt4C8FY6hqLKMdlylzSDjAdq8gwgMKP4KB7esqZzX33VoKO1c2Qoztn-nJvGU2v-ZP8h-8gb3OaTQdtvUK-1RExuQvkj0KkBo6hWeaVUHFLwErEeRjHodz3mEtCEGOUjxw3n2nMg5HkXVvSQeUhLFbN0spue~5n9uiPMQPVdFRE-J7IdlaZqYP7A__"}/>
    <SelectionCrops title={"Bell Pepper"} img={"https://s3-alpha-sig.figma.com/img/72e3/c012/a014adaf2e1694ebfbdf63bf301086ea?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QSBFp8wp7A2r0GAr8NYuJAry-ZhjazL8q4RvMaJruIUhjcu~hqpld4nsJf8pqhU3twTTHf2SGLgn5Ta0~W1wsbEW8G1mWRlGFStkud25mt6FlnkAk8zZMJRYb8I3RLmFI29UF2LG--Itp-xiEBLj5Yye~r8uNC5AjlmX3vomjWruGXT4K0~RSYMsYOldVCkCJn6RUt24AWCJB9~NZoIodyl-GQDYIoBnUf57ZW3R5XeZe7lNUu2H~wMVqdoVnABkROFkJgINaI7n4i2pymgfyegd4q02QquYtvmDX4MbvS~ykuXE9RIaqDw2dEAHzI0VG45cAhx21kCMP9QHWdJS0A__"}/>
    <SelectionCrops title={"Banana"} img={"https://s3-alpha-sig.figma.com/img/daa8/b012/71125467af4e6d9668e9438abca5b7e3?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVJEucewy37eKsvPTRi-CBAv-ocvFQ6P0svgG4HO8ZwDl2Ex17ozpyrGUGDXAk7QcR5heSdnAkeV4y2Expkdv7TrT-6DJu~lqcQFWCKqyl~MQVaFfIa7hTsympupa1PPqGUBJQm4IgOHGESKnXM-4~ZF66xQLUWCPfzuPUJFB5HPeOcOQ2sRCVLir4ZiobqsHH8Gt4JIEWg6K48DpRVrPKmDNnMmdjGRZ5VZpB5Aqk3nQvBJ2QCKaRJPAGyjFqAlJloC-YELWLlB4IOc4v5Fr0FG~F5cD2f3zIA45LabMLjYAfvZTusflWF~mENW68jD9RKQaQNb9W8bZr8ixNrTyQ__"}/>
    <SelectionCrops title={"Carrot"} img={"https://s3-alpha-sig.figma.com/img/bf46/a0a3/262db8aba676c50af3acede7e0f57153?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OgfsvfEI~gHJORFISdzo-KRAYGBs8BqCju3zC9KOWFJCQ-ppN7OQGXaHiePCOzcyk7vrl42QQOeMwTobNdnYdOBTSH1ibxThpk4zwYqxE08s6TUecM~n4M5IHWO6pf7ucS9PHvxGimDMMRdh46Nqq5QcYZIruCRGw4oGQAr~Rml0e-GMCKAcRYQmHHf6H9H1~N2kiRPCeX1V-jAsu3W0KnJxFBAtArpIcM9bSvhXmwcnvSi9vVfznBwbxvLE6wD60ziTl~CeuntVOKydTs8ulAfE9RKH1daQsoNPauxzpQJPsSVREAiktVo0I4D9lRq1DsP6U4AVr4Pdw6diI-Xk-A__"}/>
    <SelectionCrops title={"Cherries"} img={"https://s3-alpha-sig.figma.com/img/126e/f6fb/c5d93168a3f6a7c63b35385d2cd10a97?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HDAU~VefTiXp2Yquw5TQ-p8w6Rc28rHyLVse~Ma97lGN0kz2PwQ1hHZzDLqALixFe0mL1VXJaH8Khz2J7SrIchZS6T2MoXGzdfi5m5S4uzdB6O-Ok6gl83xxQyYzTeJOevEvsJkbgcCM5cgarVFVafudaRhkF3p7rx2suxH07BETA8DjnWlY~gjcNPZ3loENpmvH8H0HwIR1rXu7yza9JWqh1-n9oCg-oILKe75hs~9pX6uUypwrKOrJOkYXetiL9qCVJcht3TwlN53r-ikozBglu5PfPw9gZOkDsZ3rQs~HPain3uqozMycGUJRr7snm0yy~Xs651TWEEbVEW3~4A__"}/>
    <SelectionCrops title={"Orange"} img={"https://s3-alpha-sig.figma.com/img/ce50/b555/f578f6411471aeb70b608b1f08e9f638?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RTPkjU-e1jdDYKG5jMYMGW12~gVVeJCPFvr8uBfAKairb-8oUIOZme7MgLpLN5PdslYoXOeVtgHAXRV4TU4e5~B9oO30346NflEnXHN~rRTYMZ~lAgJtgsQmDJlRj6FHM2WvjOm-s5q-z-XTzrt4h8khU2l1EjEBgb09KyyEo~JkTDtJlCeLTTjzRrYSJfauAZ3Ai5xg2aG8ddma8PXZM2sB3eG0os02EKni6Hnxe6gGHlrEHOlt5Xp8RNlHEh7ARqTDh7kjr1-0sS6T4o0oduloU0M0Ir~KsmgdvSkOzvf84Ob0qKJOKFVxg8Q2lple-vKe32B7u4twIuRsSwXsQg__"}/>
    <SelectionCrops title={"Pawpaw"} img={"https://s3-alpha-sig.figma.com/img/10c5/a045/9ec906c3e65e5f0ff22902aee7d1b833?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PS15vZUrw0-PuV6-xX73aOuQp26o5tFYPSB~Fk1yd2bitGkw-Sz-osq-ox1egLUAtUE4sTFKv7gTrHn0KKa3HmOHNMCqcItw5e~nLnTy52sQAfc7jNXEh9kICuA55~y-RZiO-Hzcost2kUQkalJNFCzpBUNfbd1a7dDvMdFYVrytnw3WY9TqFGkUd4Env9vno8tbBtVS~0Bp82PPz7NOm-XBeMOCOqrWS~No~3S79znQWyPM6SW1ZH5PSN6EcKJfX7wG12Ty4E-rzKY6cQO-XcObyrb0GsB~61RTmHEXlOMMSRHpPd9N5hzPf4QFM3jsLH1IRXC7KgcZB7~qmMsGQQ__"}/>
    <SelectionCrops title={"Red Chilli"} img={"https://s3-alpha-sig.figma.com/img/db7d/65b5/1bc30c4b3a907e2139c48e9c22fe9691?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kRxJXhuZcxOMjHHiLrmc27PfWoY-B~Nort6TPrhYklO7fkHCZomc-VNSO~1S2eqgaKxtT~GUdbckQpKGjgXtW0dE2jUBLDiIJJm8ePi8c~ZCp864PXaHASmkh5NYk36hmLT~uXLvu9hSDyg~OGFhLX5VrokK6nGqz-dbRhjeWfWoPKlzT8wOKi1qAkwT00sR~fxjq6L7fSTIA99b3dGmT4976wgDNb43y5XmyvNQMDlG917OXVMs1VAxx1TnNUSS5rxaVSk5eDM1U9I6TqTQFkapywQQh00O4YH6-aMkFanTdzCUD4lRH63mbCF3iRvF7qAfQ0g9Ix0IfUhdtxrx5w__"}/>
    <SelectionCrops title={"Cabbage"} img={"https://s3-alpha-sig.figma.com/img/5ba3/9f8c/2281e63d4eac72e3cdb7b4f22d3e931c?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TA7iybj6R3dWtmu7L4m2uGAFqXmNwLsVRbqqjcCla6M10UgQi6NRkqGJeqHem2GB9jJ8SmpF9~jEUaRIwgANy-EVXdFlsbGmtlpMbm7~50aN~iQbN1qe5AeY16JrLCDE5i1zWpVGXgvgP-6IVtbsjmV5niXAonjlkHW6drAgpmHjtGjoicOmK6u4aqU9uozMT~mTUwowuyX7H8zgp1CvDsrgP9yF7gVuYCm-ie-~LsSpV8Ix-HricXSnrKXVEEw~veHfgWGjvKh64hDb8M3ApGLVah6t9Qf-NAXBkMtM0~6DahnSmQGDvruqaLVX4plgkd1IiNjtuBB06UmCJt~zJQ__"}/>
    <SelectionCrops title={"Yam"} img={"https://s3-alpha-sig.figma.com/img/85d9/06b8/7370439017d9d094a95ee0758e480616?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GgIecOKP2Dbf-p5INXyxat-m-xwOdwbPwdgmmzS2nJW37eXs-HDsYr3S1c1bVQI~GlPQmQwMz8TQjb3r4gh8J6r9KOXlBfMCsrG2iHnPnHFA6tNZfnd1MqflZVmBo2~KmQiarJGVwOp26G7Ktpmdsn85Q~xBkWaqQMESgT8O7g3kzSlzNRmyQKpHcAJL~0WvIzPpM1Lob0QMQow3SNLwHC~Pwv9nmqk1aJGb5qzBTPYZjU~fZodckld0EB2phbDAxLnseHM7j-YcYoqEc8xrKpr3vDtzwHC2~BDR9ZwmDlG3nDTp~-vPs7UgcbivqFyqfyoVjYGCXHVXlsjw7hjmRw__"}/>
    <SelectionCrops title={"Grape"} img={"https://s3-alpha-sig.figma.com/img/964a/17a8/c921dffbf7e6b3f64f10f4122cb4d40e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FDSdjNFPRthE1iZuD3f9ZVko9P0EvQFuugC0Zt-dgaXwzd8hlI-vIvPNplZ7BbFAfuyUsCNfH9OqKqwGsmgQqTQwSs-9ZPaxsjtASw0NEVDHwbIb31FmxJqyv1Cwode1dRnlguY30vg8L99-ZihJ-a87Cvt0l0gYO5gyVysNdkVxFpAihundHT6fV5XkOXwkm5mfmPE1NHH~V4JlZ7zMBWQP-a63zFAz2xOQ2Pd3e2z234T51oRYC4OIvVxsBY9vKfrIVfnBU~YG7S2oe7H1SGm2uw8s-jjg8LeKP1PD6OOZ1qvuaKL9gkSAyH81oBbZGpQEjaSBWZMGJuNTvx5q5w__"}/>
    <SelectionCrops title={"Pineapple"} img={"https://s3-alpha-sig.figma.com/img/69f9/3b3d/4dbeb18beec7e5e47ab935e417632716?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I-AFC5dfastqhQmm7ZzHN3FnmwKSm3nRuEkAW4q6cedIQK5SxpIPAZ0dXgw7Xf7Wr~Q-6XEHUPzJcbS2ppeH~16TpRRLQK~CXmGMGBI1HEk6d3wqNDs1sQLJbLi-iYGXj1~iV2Oq2~sQuS3RXmKUevdEJLOsYCRhgx8Tp0wgh0htE9RY0EotSh8vf8nebYUCJh0BPEU4lPatttJ8LoOgXVoQ1epKtBm5BSIGZxIgHagXCyYlX~GRk~cngXNuxlwAzSdQsVm~mG172hhyE~~bge5wbZSghQ8h0zdgg75KlyQv9MbmdvKXtnYHGeePR8yFZtKB0Ym0dPTx540l7o-agw__"}/>
    <SelectionCrops title={"Apple"} img={"https://s3-alpha-sig.figma.com/img/b89c/83db/de7881cc39f0d606876bcc2ea4a2423d?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eecwKrsWL6unFIWFBns5-5BwTNRlrx~Y600mtTayIbdBimtAhbOd9JZ6R8w2Qv-jqIAo02LNdFgc8UiIksIpS5Tseup9qh4wgzMMQ2GmXAwbbr3YeO7DiE3r73NGDcE5WB7VaFft9rombdMBvEQkj7RetLo1vmtM3~5ik-ghAaFCSLAafFpal1jdAWjGyOl7YONHPbGrOBvCL5cfnZUipuerNQGmNRlibBPGwAwZjknZTZ5PGy0incdN9nligh6qqnLsmvNAcIgKZlDcQ9h6A4woE4voVD0XQNVYz7xX9Hu7yubvEbfNNnIP8J9IcmKp5O69SeSw5Qdauw8SyYe5dA__"}/>
    <SelectionCrops title={"Green Beans"} img={"https://s3-alpha-sig.figma.com/img/ec51/0eb5/8f65097207068c38354e6f9a5f883279?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NOin1BKElihtC-~sartPwVUg6hpKf3Ytt18GJyik1C6cfmf8~b3WzGBkQvONgbjfvlovjRIoKHLUEsmzsFDVNogwtD7nTpar4rN2DJlgc2JBGlv5k61o0VKNXVJVB6wlxWwgFn~ZgEUXZkXCHHLoc4EXOBQQnUvZtkD0fwRbd6o3Gb0Dp0KswJLGYzDWDwn~cTE~d3DfgT3y2XCVmV44vCdb3ZiCpxC5GRlNubQMfAp0mHYxmlOI9D~ImmopWjjhAhHK42epQzcDmHj607OfHCDzKioe9RmZ80PfrbkIfXH9yfk03-o-TkeFfeFGyZaICj1GoBm6jr2IF3HnGzXLCQ__"}/>
    <SelectionCrops title={"Lemon"} img={"https://s3-alpha-sig.figma.com/img/21f8/5283/69291e58046c0418f2d90402da5e5813?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R2qD-M8-rah1Ac~0L~Uow4tGvUCt75gBo~v3N1zyO2WQzmobGO3CfB0Y4cKWTRy~OegSinEKwuq2KNXXNFLAuLv2IpTBq4FPm1NWkjefQX~nXa-EmcjwLsZ0txViMrC-p27mAJda8-JflycLECAuJcBpCGmF8VFwy7KJIpPE9YeGOVpNxGIJZKCxiSKx6vW1SEI3SdfgU0ZN6gWX6p8Htkli4NwRvA~Td~iZTWFcaXt2BPWjNkT4sE7e6CFlEMOA4gFPqqQx5ioF0915zYRktpLBUutR3Rkb8YLmkgnEU9pOz0loKoLnpftXTBH3p~Vm0kPlhJVO2NVvUzy-p-tkdA__"}/>
    <SelectionCrops title={"Okra"} img={"https://s3-alpha-sig.figma.com/img/38bd/cd50/703dc8f7f75f66d70088cec2f1f1869a?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JdxCKRMiEEw4K2ETqlbaOIOdpZDtlO8MROZFN0C~NYXxmsWtQ-BEHaS2otmjBLK2Jm73u4~m6feDGAm-lS3WiLH5wLzlnhWtGvbNs60C7zDL4gve419yS4vsgKC1KuGf8TNGHpYP7tsJdEaheYR-e-Cw9z9FLLtcUsi8jF0f9sfM7b5HpiFMzkU8KMYXFKBV1nXnVFbD669ulHyHX87u1s4kl5S9q9TZTvWttXBhc7nNmeFwkx-ggxSnidj7TDqfQMSRBrNAUVQL-hGcDlImD10XzJ56Ktq~NSgyf82eVsQFSP8A6ZfwCIHLXGDV53eujQren53Y628pTpvp6Ga6tQ__"}/>
</HStack>

{/* Footer */}
<Box bottom={'$0'} mb={'$4'} style={{width: "100%", position: "absolute", bottom: 0, left: 0, right: 0 }}>
    <HStack justifyContent='space-between' mx={'$3'}>
        
    <Button size="md" variant="link" action="positive" isDisabled={false} isFocusVisible={false} >
          <ButtonText fontSize={'$sm'} fontWeight='$light'>Skip </ButtonText>
        </Button>

        
        <Button size="sm" variant="solid" action="positive" px={"$9"} borderRadius="$3xl" isDisabled={false} isFocusVisible={false} >
          <ButtonText>Next </ButtonText>
        </Button>
      
      
    </HStack>
</Box>
        </View>
    </SafeAreaProvider>
  )
}