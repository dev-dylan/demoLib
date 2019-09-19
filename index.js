
import { NativeModules } from 'react-native';
module.exports = NativeModules.RNPyyRnLib;

const { RNPyyRnLib } = NativeModules;

export default RNPyyRnLib;

/**
 * 登录
 *
 * @param loginId
 */
function login (loginId) {
    RNPyyRnLib && RNPyyRnLib.login && RNPyyRnLib.login(loginId);
  }
  
  /**
   * 设置用户属性
   *
   * @param profile 用户属性
   * Sex
   * Age
   */
  function profileSet (profile) {
    RNPyyRnLib && RNPyyRnLib.profileSet && RNPyyRnLib.profileSet(profile);
  }
  
  /**
   * 记录初次设定的属性
   *
   * @param profile
   */
  function profileSetOnce (profile) {
    RNPyyRnLib && RNPyyRnLib.profileSetOnce && RNPyyRnLib.profileSetOnce(profile);
  }
  
  
  /**
   * 追踪事件
   *
   * @param event
   * @param properties
   */
  function track (event, properties) {
    RNPyyRnLib && RNPyyRnLib.track && RNPyyRnLib.track(event, properties);
  }
  
  /**
   * 事件开始
   *
   * @param event
   */
  function trackTimerStart (event) {
    RNPyyRnLib && RNPyyRnLib.trackTimerStart && RNPyyRnLib.trackTimerStart(event);
  }
  
  /**
   * 事件结束
   *
   * @param event
   * @param properties
   */
  function trackTimerEnd (event, properties) {
    RNPyyRnLib && RNPyyRnLib.trackEnd && RNPyyRnLib.trackEnd(event, properties);
  }
  
  
  export default {
    login,
    profileSet,
    profileSetOnce,
    track,
    trackTimerStart,
    trackTimerEnd,
    sa: RNPyyRnLib,
  };
  