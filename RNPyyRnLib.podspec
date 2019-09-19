
Pod::Spec.new do |s|
  s.name         = "RNPyyRnLib"
  s.version      = "1.0.5"
  s.summary      = "RNPyyRnLib"
  s.description  = <<-DESC
                  神策分析 RN 组件
                   DESC
  s.homepage     = "https://www.sensorsdata.cn"
  s.license      = "MIT"
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNPyyRnLib.git", :tag => "master" }
  s.source_files  = "RNPyyRnLib/**/*.{h,m}"
  s.requires_arc = true
  s.dependency "React"
  s.dependency "SensorsAnalyticsSDK"

end

  