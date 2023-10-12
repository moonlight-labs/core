module Core
  module Jobs
    class ApplicationJob < ActiveJob::Base
      include Que::ActiveJob::JobExtensions
    end

    class ExampleJob < ApplicationJob
      def perform
        raise 'random simulated error' if Random.new.rand(10) == 9
        sleep(0.1 + Random.new.rand(3))
      end
    end
    
    class WelcomeMailer < ExampleJob
    end
    
    class ProcessPayment < ExampleJob
    end
    
    class GenerateReport < ExampleJob
    end
    
    class NotifySlack < ExampleJob
    end
    
    # (0..10000).each { |i| [WelcomeMailer, ProcessPayment, GenerateReport, NotifySlack].sample.set(wait: rand(0..100).minute).perform_later }
  end
end