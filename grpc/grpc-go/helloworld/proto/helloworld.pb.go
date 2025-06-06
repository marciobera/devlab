// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.6
// 	protoc        v5.29.3
// source: helloworld/proto/helloworld.proto

package proto

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
	unsafe "unsafe"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type GreetingType int32

const (
	GreetingType_FORMAL   GreetingType = 0
	GreetingType_UNKNOWN  GreetingType = 0
	GreetingType_INFORMAL GreetingType = 1
)

// Enum value maps for GreetingType.
var (
	GreetingType_name = map[int32]string{
		0: "FORMAL",
		// Duplicate value: 0: "UNKNOWN",
		1: "INFORMAL",
	}
	GreetingType_value = map[string]int32{
		"FORMAL":   0,
		"UNKNOWN":  0,
		"INFORMAL": 1,
	}
)

func (x GreetingType) Enum() *GreetingType {
	p := new(GreetingType)
	*p = x
	return p
}

func (x GreetingType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (GreetingType) Descriptor() protoreflect.EnumDescriptor {
	return file_helloworld_proto_helloworld_proto_enumTypes[0].Descriptor()
}

func (GreetingType) Type() protoreflect.EnumType {
	return &file_helloworld_proto_helloworld_proto_enumTypes[0]
}

func (x GreetingType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use GreetingType.Descriptor instead.
func (GreetingType) EnumDescriptor() ([]byte, []int) {
	return file_helloworld_proto_helloworld_proto_rawDescGZIP(), []int{0}
}

type HelloRequest struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Name          string                 `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *HelloRequest) Reset() {
	*x = HelloRequest{}
	mi := &file_helloworld_proto_helloworld_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *HelloRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HelloRequest) ProtoMessage() {}

func (x *HelloRequest) ProtoReflect() protoreflect.Message {
	mi := &file_helloworld_proto_helloworld_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HelloRequest.ProtoReflect.Descriptor instead.
func (*HelloRequest) Descriptor() ([]byte, []int) {
	return file_helloworld_proto_helloworld_proto_rawDescGZIP(), []int{0}
}

func (x *HelloRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type HelloReply struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Message       string                 `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *HelloReply) Reset() {
	*x = HelloReply{}
	mi := &file_helloworld_proto_helloworld_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *HelloReply) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HelloReply) ProtoMessage() {}

func (x *HelloReply) ProtoReflect() protoreflect.Message {
	mi := &file_helloworld_proto_helloworld_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HelloReply.ProtoReflect.Descriptor instead.
func (*HelloReply) Descriptor() ([]byte, []int) {
	return file_helloworld_proto_helloworld_proto_rawDescGZIP(), []int{1}
}

func (x *HelloReply) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

type UserDetails struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Name          string                 `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	IsActive      *bool                  `protobuf:"varint,3,opt,name=is_active,json=isActive,proto3,oneof" json:"is_active,omitempty"`
	BirthYear     *uint32                `protobuf:"varint,4,opt,name=birth_year,json=birthYear,proto3,oneof" json:"birth_year,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *UserDetails) Reset() {
	*x = UserDetails{}
	mi := &file_helloworld_proto_helloworld_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *UserDetails) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UserDetails) ProtoMessage() {}

func (x *UserDetails) ProtoReflect() protoreflect.Message {
	mi := &file_helloworld_proto_helloworld_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UserDetails.ProtoReflect.Descriptor instead.
func (*UserDetails) Descriptor() ([]byte, []int) {
	return file_helloworld_proto_helloworld_proto_rawDescGZIP(), []int{2}
}

func (x *UserDetails) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *UserDetails) GetIsActive() bool {
	if x != nil && x.IsActive != nil {
		return *x.IsActive
	}
	return false
}

func (x *UserDetails) GetBirthYear() uint32 {
	if x != nil && x.BirthYear != nil {
		return *x.BirthYear
	}
	return 0
}

type GreetRequest struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Type          GreetingType           `protobuf:"varint,1,opt,name=type,proto3,enum=helloworld.GreetingType" json:"type,omitempty"`
	Users         []*UserDetails         `protobuf:"bytes,2,rep,name=users,proto3" json:"users,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *GreetRequest) Reset() {
	*x = GreetRequest{}
	mi := &file_helloworld_proto_helloworld_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GreetRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GreetRequest) ProtoMessage() {}

func (x *GreetRequest) ProtoReflect() protoreflect.Message {
	mi := &file_helloworld_proto_helloworld_proto_msgTypes[3]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GreetRequest.ProtoReflect.Descriptor instead.
func (*GreetRequest) Descriptor() ([]byte, []int) {
	return file_helloworld_proto_helloworld_proto_rawDescGZIP(), []int{3}
}

func (x *GreetRequest) GetType() GreetingType {
	if x != nil {
		return x.Type
	}
	return GreetingType_FORMAL
}

func (x *GreetRequest) GetUsers() []*UserDetails {
	if x != nil {
		return x.Users
	}
	return nil
}

type GreetReply struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Messages      map[string]string      `protobuf:"bytes,1,rep,name=messages,proto3" json:"messages,omitempty" protobuf_key:"bytes,1,opt,name=key" protobuf_val:"bytes,2,opt,name=value"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *GreetReply) Reset() {
	*x = GreetReply{}
	mi := &file_helloworld_proto_helloworld_proto_msgTypes[4]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GreetReply) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GreetReply) ProtoMessage() {}

func (x *GreetReply) ProtoReflect() protoreflect.Message {
	mi := &file_helloworld_proto_helloworld_proto_msgTypes[4]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GreetReply.ProtoReflect.Descriptor instead.
func (*GreetReply) Descriptor() ([]byte, []int) {
	return file_helloworld_proto_helloworld_proto_rawDescGZIP(), []int{4}
}

func (x *GreetReply) GetMessages() map[string]string {
	if x != nil {
		return x.Messages
	}
	return nil
}

var File_helloworld_proto_helloworld_proto protoreflect.FileDescriptor

const file_helloworld_proto_helloworld_proto_rawDesc = "" +
	"\n" +
	"!helloworld/proto/helloworld.proto\x12\n" +
	"helloworld\"\"\n" +
	"\fHelloRequest\x12\x12\n" +
	"\x04name\x18\x01 \x01(\tR\x04name\"&\n" +
	"\n" +
	"HelloReply\x12\x18\n" +
	"\amessage\x18\x01 \x01(\tR\amessage\"\x8a\x01\n" +
	"\vUserDetails\x12\x12\n" +
	"\x04name\x18\x01 \x01(\tR\x04name\x12 \n" +
	"\tis_active\x18\x03 \x01(\bH\x00R\bisActive\x88\x01\x01\x12\"\n" +
	"\n" +
	"birth_year\x18\x04 \x01(\rH\x01R\tbirthYear\x88\x01\x01B\f\n" +
	"\n" +
	"_is_activeB\r\n" +
	"\v_birth_yearJ\x04\b\x02\x10\x03\"k\n" +
	"\fGreetRequest\x12,\n" +
	"\x04type\x18\x01 \x01(\x0e2\x18.helloworld.GreetingTypeR\x04type\x12-\n" +
	"\x05users\x18\x02 \x03(\v2\x17.helloworld.UserDetailsR\x05users\"\x8b\x01\n" +
	"\n" +
	"GreetReply\x12@\n" +
	"\bmessages\x18\x01 \x03(\v2$.helloworld.GreetReply.MessagesEntryR\bmessages\x1a;\n" +
	"\rMessagesEntry\x12\x10\n" +
	"\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n" +
	"\x05value\x18\x02 \x01(\tR\x05value:\x028\x01*9\n" +
	"\fGreetingType\x12\n" +
	"\n" +
	"\x06FORMAL\x10\x00\x12\v\n" +
	"\aUNKNOWN\x10\x00\x12\f\n" +
	"\bINFORMAL\x10\x01\x1a\x02\x10\x012\x86\x01\n" +
	"\aGreeter\x12>\n" +
	"\bSayHello\x12\x18.helloworld.HelloRequest\x1a\x16.helloworld.HelloReply\"\x00\x12;\n" +
	"\x05Greet\x12\x18.helloworld.GreetRequest\x1a\x16.helloworld.GreetReply\"\x00B<Z:github.com/marciobera/devlab/grpc/grpc-go/helloworld/protob\x06proto3"

var (
	file_helloworld_proto_helloworld_proto_rawDescOnce sync.Once
	file_helloworld_proto_helloworld_proto_rawDescData []byte
)

func file_helloworld_proto_helloworld_proto_rawDescGZIP() []byte {
	file_helloworld_proto_helloworld_proto_rawDescOnce.Do(func() {
		file_helloworld_proto_helloworld_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_helloworld_proto_helloworld_proto_rawDesc), len(file_helloworld_proto_helloworld_proto_rawDesc)))
	})
	return file_helloworld_proto_helloworld_proto_rawDescData
}

var file_helloworld_proto_helloworld_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_helloworld_proto_helloworld_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_helloworld_proto_helloworld_proto_goTypes = []any{
	(GreetingType)(0),    // 0: helloworld.GreetingType
	(*HelloRequest)(nil), // 1: helloworld.HelloRequest
	(*HelloReply)(nil),   // 2: helloworld.HelloReply
	(*UserDetails)(nil),  // 3: helloworld.UserDetails
	(*GreetRequest)(nil), // 4: helloworld.GreetRequest
	(*GreetReply)(nil),   // 5: helloworld.GreetReply
	nil,                  // 6: helloworld.GreetReply.MessagesEntry
}
var file_helloworld_proto_helloworld_proto_depIdxs = []int32{
	0, // 0: helloworld.GreetRequest.type:type_name -> helloworld.GreetingType
	3, // 1: helloworld.GreetRequest.users:type_name -> helloworld.UserDetails
	6, // 2: helloworld.GreetReply.messages:type_name -> helloworld.GreetReply.MessagesEntry
	1, // 3: helloworld.Greeter.SayHello:input_type -> helloworld.HelloRequest
	4, // 4: helloworld.Greeter.Greet:input_type -> helloworld.GreetRequest
	2, // 5: helloworld.Greeter.SayHello:output_type -> helloworld.HelloReply
	5, // 6: helloworld.Greeter.Greet:output_type -> helloworld.GreetReply
	5, // [5:7] is the sub-list for method output_type
	3, // [3:5] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_helloworld_proto_helloworld_proto_init() }
func file_helloworld_proto_helloworld_proto_init() {
	if File_helloworld_proto_helloworld_proto != nil {
		return
	}
	file_helloworld_proto_helloworld_proto_msgTypes[2].OneofWrappers = []any{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_helloworld_proto_helloworld_proto_rawDesc), len(file_helloworld_proto_helloworld_proto_rawDesc)),
			NumEnums:      1,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_helloworld_proto_helloworld_proto_goTypes,
		DependencyIndexes: file_helloworld_proto_helloworld_proto_depIdxs,
		EnumInfos:         file_helloworld_proto_helloworld_proto_enumTypes,
		MessageInfos:      file_helloworld_proto_helloworld_proto_msgTypes,
	}.Build()
	File_helloworld_proto_helloworld_proto = out.File
	file_helloworld_proto_helloworld_proto_goTypes = nil
	file_helloworld_proto_helloworld_proto_depIdxs = nil
}
