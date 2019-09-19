
#import "RNDemoLib.h"

@implementation RNDemoLib

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(test) {
    NSLog(test)
}

@end
  
